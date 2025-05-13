import React from "react";
import { useQuery } from '@apollo/client';
import { GET_USERS } from '../queries';
import { Table, Button} from 'react-bootstrap';
import { useNavigate , Link} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
	const navigate = useNavigate();

	const users = useQuery(GET_USERS);

	users.refetch();//refetch the query when redirecting
	
	function setUserId(uid){
		localStorage.setItem('id', uid);//string value is stored
	}
	
	return (
		<div style={{marginLeft:'5rem', marginRight:'5em'}}>
			 {/* <p>{JSON.stringify(users.data, null, 2)}</p> */}
			<Table striped bordered hover size="sm">
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Last Name</th>
						<th>Is Militar</th>
						<th>Time Create</th>
						<th>Is Temporal</th>
						<th>User Name</th>
						<th>Email</th>
                        <th>Verification Token</th>
                        <th>Name Type Document</th>
                        <th>Document</th>
                        <th>Place Expedition</th>
                        <th>Date Expedition</th>
                        <th>Country Code</th>
                        <th>Country Name</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Phone</th> 
                        <th>Cell Phone</th>
                        <th>Emergency Name</th>
                        <th>Emergency Phone</th>
					</tr>
				</thead>
				<tbody>
					{users.error ? alert(users.error) : null}
					{users.data?.getUsers.map((user, index) => (
						<tr key={index}>
							<td>{user.id}</td>
							<td>{user.name}</td>
							<td>{user.lastName}</td>
							<td>{user.isMilitar}</td>
                            <td>{user.timeCreate}</td>
                            <td>{user.isTemporal}</td>
                            <td>{user.userName}</td>
                            <td>{user.password}</td>
                            <td>{user.email}</td>
                            <td>{user.verificationToken}</td>
                            <td>{user.nameTypeDocument}</td>
                            <td>{user.document}</td>
                            <td>{user.placeExpedition}</td>
							<td>{new Date(user.dateExpedition).toDateString()}</td>
                            <td>{user.countryCode}</td>
                            <td>{user.countryName}</td>
                            <td>{user.address}</td>
                            <td>{user.city}</td>
                            <td>{user.phone}</td>
                            <td>{user.cellPhone}</td>
                            <td>{user.emergencyName}</td>
                            <td>{user.emergencyPhone}</td>
						</tr>
					))}
				</tbody>
			</Table>
			<Link  to='/create'>
                <Button variant="primary" size="md">Create</Button>
            </Link>
		</div>
	);
}	
export default Home;