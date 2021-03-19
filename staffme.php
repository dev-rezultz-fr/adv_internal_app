<?php
  header("Access-Control-Allow-Origin: *");
  // Preparing Database Call
	$host = '213.32.36.35:3306';
	$dbname = 'adventsbi';
	$usr = 'advents';
  $pwd = 'RyYfuYWdv3uTKGf3';
  
  $db = new \PDO('mysql:host='.$host.';dbname='.$dbname, $usr, $pwd);
  $db->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
  
  // Preparing & Executing Request to Database
  $sql = "
  SELECT gb.`AFLBUD.IDENT` id_budg,gb.`AFLBUD.DESIG` label,YEAR(gb.`AFLBUD.DATE_DEBUT`) annee
         ,'budget' line_type,gb.`AFLBUD.DATE_DEBUT` cong_from,gb.`AFLBUD.DATE_FIN` cong_to,gb.`AFLBUD.HBUD` nb
  FROM
        adventsbi.gest_budgets gb
        ,adventsbi.gest_ressources gr
  WHERE 1=1
    AND gr.`AFPERS.EMAIL` = :email
    AND gb.`AFLBUD.DESIG` LIKE CONCAT('%',gr.`AFPERS.CODE`)
    AND gb.`AFLBUD.AFAFFA_CODE` IN ('01CO9901','01CO9902')
  UNION
  SELECT gb.`AFLBUD.IDENT` id_budg,gb.`AFLBUD.DESIG` label,YEAR(gb.`AFLBUD.DATE_DEBUT`) annee
        ,'planned' line_type,ga.`AFAFFE.DEBUT_RAF` cong_from,ga.`AFAFFE.FIN_RAF` cong_to,ga.`AFAFFE.HRAF` nb
  FROM
        adventsbi.gest_budgets gb
        ,adventsbi.gest_affectations ga
        ,adventsbi.gest_ressources gr
  WHERE 1=1
    AND gr.`AFPERS.EMAIL` = :email
    AND gb.`AFLBUD.IDENT` = ga.`AFAFFE->AFLBUD.IDENT`
    AND ga.`AFAFFE.RESSOURCE` = gr.`AFPERS.IDENT`
    AND ga.`AFAFFE->AFAFFA.CODE` IN ('01CO9901','01CO9902')
  UNION
  SELECT gb.`AFLBUD.IDENT` id_budg,gb.`AFLBUD.DESIG` label, YEAR(gb.`AFLBUD.DATE_DEBUT`) annee
        ,'check' line_type,gt.`AFLTPS.DEBUT_RAF` cong_from,gt.`AFLTPS.FIN_RAF` cong_to,gt.`AFLTPS.JREA` nb
  FROM  adventsbi.gest_temps gt,
        adventsbi.gest_budgets gb,
        adventsbi.gest_ressources gr
  WHERE 1=1
    AND gr.`AFPERS.EMAIL` = :email
    AND gb.`AFLBUD.IDENT` = gt.`AFLTPS->AFLBUD.IDENT`
    AND gt.`AFLTPS->AFETPS.RESSOURCE` = gr.`AFPERS.IDENT`
    AND gt.`AFLTPS.AFAFFA_CODE` IN ('01CO9901','01CO9902')
  ORDER BY annee DESC,id_budg, line_type DESC
      ";
  $q = $db->prepare($sql);
  $q->bindParam(':email', $_GET['e'], PDO::PARAM_STR);
  $q->execute();
  $data = $q->fetchAll(\PDO::FETCH_ASSOC);

  //$currY = -1;
  $currB = 0;
  $check = 0;
  $planned = 0;
  $temp = Array();
  $budg = Array();
  //$lines = Array();
  foreach($data as $row){
    if($currB != $row['id_budg']){
      if($currB > 0){
        $budg['check'] = $check;
        $budg['planned'] = $planned;
        $budg['ongoing'] = $planned + $check;
        $budg['solde'] = $budg['budget'] - $check - $planned;
        $budg['status'] = ($budg['planned']>0 || $budg['solde'] > 0)?'0':'1';
        $temp[] = $budg; 
      }
      //echo 'change budget </br>';
      $currB = $row['id_budg'];
      $budg = Array(
        'id' => $row['id_budg'],
        'year' => $row['annee'],
        'label' => $row['label'],
        'lines' => Array()
      );
      $check = 0;
      $planned = 0;
    }
    switch($row['line_type']){
      case 'budget':
        $budg['budget'] = $row['nb'];
        $budg['budget_from'] = $row['cong_from'];
        $budg['budget_to'] = $row['cong_to'];
        break;
      default :
        $budg['lines'][] = Array(
          'type' => $row['line_type'],
          'from' => $row['cong_from'],
          'to' => $row['cong_to'],
          'nb' => $row['nb']
        );
        break;
    }
    if($row['line_type'] == 'check'){$check = $check + $row['nb'];}
    elseif($row['line_type'] == 'planned'){$planned = $planned + $row['nb'];}
  }
  $budg['check'] = $check;
  $budg['planned'] = $planned;
  $budg['ongoing'] = $planned + $check;
  $budg['solde'] = $budg['budget'] - $check - $planned;
  $budg['status'] = ($budg['planned']>0 || $budg['solde'] > 0)?'0':'1';
  $temp[] = $budg; 

  // Organizing data to render it
  $dataColl = array('nbRows' => $q->rowCount(),'data'=>$temp);
  echo json_encode($dataColl);
?>