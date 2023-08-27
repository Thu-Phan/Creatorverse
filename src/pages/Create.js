import { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../config/supabaseClient";

const Create = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [youtube, setYoutube] = useState('');
  const [twitter, setTwitter] = useState('');
  const [instagram, setInstagram] = useState('');
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();



    const { data, error } = await supabase
      .from('creators-table')
      .insert([{ title, description, youtube, twitter, instagram }]);

    if (error) {
      console.log(error);
      setFormError('Please fill in all the fields correctly.');
    }
    if (data) {
      console.log(data);
      setFormError(null);
      navigate('/');
    }
  };

  return (
    <div className="page create">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Name:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="description">Description:</label>
        <p><i>Provide a description of the creator. Who are they? What makes them interesting?</i></p>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <p>
          <b>SOCIAL MEDIA LINKS</b>
        </p>
        <label htmlFor="youtube">Youtube:</label>
        <textarea
          id="youtube"
          value={youtube}
          onChange={(e) => setYoutube(e.target.value)}
        />
        <label htmlFor="twitter">Twitter:</label>
        <textarea
          id="twitter"
          value={twitter}
          onChange={(e) => setTwitter(e.target.value)}
        />


        <label htmlFor="instagram">Instagram:</label>
        <textarea
          id="instagram"
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        />



        {/* <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        /> */}

        <button>SUBMIT</button>

        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
};

export default Create;