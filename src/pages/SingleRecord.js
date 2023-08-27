import { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import supabase from "../config/supabaseClient";

import { IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const SingleRecord = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [youtube, setYoutube] = useState('');
    const [twitter, setTwitter] = useState('');
    const [instagram, setInstagram] = useState('');

    useEffect(() => {
        const fetchCreator = async () => {
            const { data, error } = await supabase
                .from('creators-table')
                .select()
                .eq('id', id)
                .single();

            if (error) {
                navigate('/', { replace: true });
            }
            if (data) {
                setTitle(data.title);
                setDescription(data.description);
                setYoutube(data.youtube);
                setTwitter(data.twitter);
                setInstagram(data.instagram);
            }
        };

        fetchCreator();
    }, [id, navigate]);

    return (

        <div>
            <h1>{title}</h1>
            <p>{description}</p><br/>
            <IconButton onClick={() => window.open(youtube, "_blank")}>
                <YouTubeIcon />
                <p>{youtube}</p>

            </IconButton><br/>

            <IconButton onClick={() => window.open(twitter, "_blank")}>
                <TwitterIcon />
                <p>{twitter}</p>
            </IconButton><br/>


            <IconButton onClick={() => window.open(instagram, "_blank")}>
                <InstagramIcon />
                <p>{instagram}</p>
            </IconButton><br/>

        </div>
    );
};

export default SingleRecord

