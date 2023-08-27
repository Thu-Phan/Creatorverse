import supabase from "../config/supabaseClient";
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const CreatorCard = ({ creator, onDelete }) => {

  const handleDelete = async () => {
    const { data, error } = await supabase
      .from('creators-table')
      .delete()
      .eq('id', creator.id);

    if (error) {
      console.error(error);
    }
    if (data) {
      console.log(data);
      onDelete(creator.id);
    }
  };

  return (
    <div className="creator-card">
      <h3>{creator.title}</h3>
      <p>{creator.description}</p>

      <div className="buttons">
        <Link to={"/edit/" + creator.id}>
          <i className="material-icons">edit</i>
        </Link>
        <Link to={"/" + creator.id}>
          <i className="material-icons">info</i>
        </Link>
        <i className="material-icons" onClick={handleDelete}>delete</i>

        {/* <a href={smoothie.youtube} target="_blank" rel="noopener noreferrer">
          <i className="material-icons">smart_display</i>
        </a> */}
        <IconButton onClick={() => window.open(creator.youtube, "_blank")}>
          <YouTubeIcon />
        </IconButton>
        <IconButton onClick={() => window.open(creator.twitter, "_blank")}>
          <TwitterIcon />
        </IconButton>
        <IconButton onClick={() => window.open(creator.instagram, "_blank")}>
          <InstagramIcon />
        </IconButton>


      </div>
    </div>
  );
};

export default CreatorCard;
