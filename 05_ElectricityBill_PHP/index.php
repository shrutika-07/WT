<!DOCTYPE html>
<html>
<head>
	<title>Shrutika Gade</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
	<style>
		body {
			background-color: #f7f7f7;
		}
		
		.container {
			padding: 20px;
		}
		
		h2 {
			font-family: Roboto, sans-serif;
			font-size: 24px;
			color: #333;
		}
		
		.form-group {
			border: 1px solid #ddd;
			border-radius: 4px;
			padding: 10px;
		}
		
		input[type="number"] {
			font-size: 16px;
			color: #333;
			border: 1px solid #ccc;
			border-radius: 4px;
			padding: 5px 10px;
		}
		
		input[type="number"]:hover {
			background-color: #f0f0f0;
		}
		
		
		input[type="submit"] {
			background-color: #ff9900;
			color: #fff;
			border: none;
			border-radius: 4px;
			padding: 10px 20px;
			cursor: pointer;
		}
		
		input[type="submit"]:hover {
			background-color: #ff8000;
		}
		
		.output {
			font-size: 18px;
			color: #555;
			font-weight: bold;
		}
	</style>
</head>
<body style="background-color:">
	<?php
	$amount = '';
	$kwh_usage = '';
	if (isset($_POST['submit'])) {
		$units = $_POST['kwh'];
		if (!empty($units)) {
			$kwh_usage = calculate_electricity_bill($units);
			$amount = '<strong>The total electricity bill for ' . $units . ' units of electricity is: Rs. ' . $kwh_usage . '/-</strong>';
		}
	}



	function calculate_electricity_bill($units) {
		$first_unit_cost = 3.50;
		$second_unit_cost = 4.00;
		$third_unit_cost = 5.20;
		$fourth_unit_cost = 6.50;

		if($units <= 50) {
			$bill = $units * $first_unit_cost;
		}
		else if($units > 50 && $units <= 150) {
			$temp = 50 * $first_unit_cost;
			$remaining_units = $units - 50;
			$bill = $temp + ($remaining_units * $second_unit_cost);
		}
		else if($units > 100 && $units <= 200) {
			$temp = (50 * $first_unit_cost) + (100 * $second_unit_cost);
			$remaining_units = $units - 150;
			$bill = $temp + ($remaining_units * $third_unit_cost);
		}
		else {
			$temp = (50 * $first_unit_cost) + (100 * $second_unit_cost) + (100 * $third_unit_cost);
			$remaining_units = $units - 250;
			$bill = $temp + ($remaining_units * $fourth_unit_cost);
		}
		return number_format((float)$bill, 2, '.', '');
	}
	?>
	<nav class="nav" style="background-color:#C9ECC5">
	<h1 style="margin-left:800px;margin-top:20px;margin-bottom:20px;padding-left:100px"> Electricity Bill Calculator</h1> 

	</nav>
	<div class="container">
		
		<table class="table">
			<thead class="table-dark">
				<tr>
					<th scope="col">Sr. No.</th>
					<th scope="col">Electricity Units</th>
					<th scope="col">Cost per Unit (Rs.)</th>
				</tr>
			</thead>
			<tbody class="table-group-divider">
				<tr>
					<th scope="row">1</th>
					<td>50</td>
					<td>3.50</td>
				</tr>
				<tr class="table-success">
					<th scope="row">2</th>
					<td>50-150</td>
					<td>4.00</td>
				</tr>
				<tr>
					<th scope="row">3</th>
					<td>150-250</td>
					<td>5.20</td>
				</tr>
				<tr class="table-success">
					<th scope="row">4</th>
					<td>250 & above</td>
					<td>6.50</td>
				</tr>
			</tbody>
		</table>
		
		<div class="form-group" style="background-color:#ececec;padding:50px">
		<form action="" method="post">
		<div class="form-group">
			<input type="number" name="kwh" placeholder="Please Enter The Units" class="form-control" step="0.01"/>
		</div>
		<div class="form-group">		
			<input type="submit" name="submit" class="btn btn-warning" value="Submit" />
		
		</div>	
		</form>
		</div>
		<div style="font-size:30px;text-align:center">
		    <?php echo $amount; ?>
		</div>
	</div>
</body>
</html>