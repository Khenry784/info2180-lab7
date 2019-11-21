<?php
$host = getenv('IP');
$username = 'lab7_user';
$password = '';
$dbname = 'world';

$conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);

$stmt = $conn->query("SELECT * FROM countries");
$stmt2 = $conn->query("SELECT * FROM countries WHERE name LIKE '%$country%' ");

$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
$results2 = $stmt2->fetchAll(PDO::FETCH_ASSOC);

echo '<table style="border-bottom: 1px dotted #000000;">
<tr>
    <td>'."Country Name".'</td>
    <td>'."Continent".'</td>
    <td>'."Independence Year".'</td>
    <td>'."Head of State".'</td>
</tr>';

if($country == ""){
    foreach ($results as $row) {
      echo '<tr style="border-bottom: 1px dotted #000000;">
          <td>'.$row['name']. '</td>
          <td>'.$row['continent']. '</td>
          <td>'.$row['independence_year']. '</td>
          <td>'.$row['head_of_state']. '</td></tr>';
    }
          
}
else {
  foreach ($results2 as $row){
    echo '<tr><td>'.$row['name'].'</td>
          <td>'.$row['continent']. '</td>
          <td>'.$row['independence_year']. '</td>
          <td>'.$row['head_of_state']. '</td></tr><br>';
  }
}
echo '</table>';

