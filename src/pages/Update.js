import { useEffect, useState } from "react"
import { useParams, useNavigate } from 'react-router-dom'
import supabase from "../config/supabaseClient"

const Update = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [youtube, setYoutube] = useState('')
  const [twitter, setTwitter] = useState('')
  const [instagram, setInstagram] = useState('')
  const [formError, setFormError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    // if (!title || !description || !youtube || !twitter || !instagram ) {
    //   setFormError('Please fill in all the fields correctly.')
    //   return
    // }

    const { data, error } = await supabase
      .from('creators-table')
      .update({ title, description, youtube, twitter, instagram})
      .eq('id', id)

    if (error) {
      setFormError('Please fill in all the fields correctly.')
    }
    if (data) {
      setFormError(null)
      navigate('/')
    }
  }

  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from('creators-table')
        .select()
        .eq('id', id)
        .single()

      if (error) {
        navigate('/', { replace: true })
      }
      if (data) {
        setTitle(data.title)
        setDescription(data.description)
        setYoutube(data.youtube)
        setTwitter(data.twitter)
        setInstagram(data.instagram)
      }
    }

    fetchCreator()
  }, [id, navigate])

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
        <textarea 
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
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

  

        <button>Update</button>

        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  )
}

export default Update