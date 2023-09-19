import React from 'react';
import './Avatar.css';

export type AvatarProps = {
	imageAvatar: string[];
};

const Avatar: React.FC<AvatarProps> = ({ imageAvatar }) => {
	return (
		<>
			{imageAvatar.map((image: string, index: number) => (
				<div className="avatar">
					<div className="w-24 rounded-full">
						<img src={image} key={index} />
					</div>
				</div>
			))}
		</>
	);
};

export default Avatar;
