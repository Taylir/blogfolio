import React from 'react';
import { useNavigate, useParams } from 'react-router';

const ListItem = ({title, id, body}) => {
    const navigate = useNavigate()

    return (
            <li onClick={() => navigate(`/practice/${id}`)} className="css__list-item">{title}</li>
    );
}

export default ListItem;
