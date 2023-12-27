import { FC } from 'react';
import { UserProps } from './UsersList';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';

const UserCard: FC<UserProps> = ({ name, email, picture }) => {
	return (
		<Card className="flex flex-row my-2 mx-10 w-full ">
			{/* <img src={picture.thumbnail} /> */}
			<CardMedia
				image={picture.thumbnail}
				sx={{ height: 80, width: 80 }}
				className="m-3"
			/>
			<CardContent className="">
				<Typography gutterBottom variant="h5" component="div">
					{name.first} {name.last}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{email}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default UserCard;
