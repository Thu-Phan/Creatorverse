import supabase from '../config/supabaseClient';
import { useEffect, useState } from 'react';

// components
import CreatorCard from '../components/CreatorCard';

const Home = () => {
  const [fetchError, setFetchError] = useState(null);
  const [creators, setCreators] = useState(null);

  const handleDelete = (id) => {
    setCreators(prevCreators => {
      return prevCreators.filter(sm => sm.id !== id);
    });
  };

  useEffect(() => {
    const fetchCreators = async () => {
      const { data, error } = await supabase
        .from('creators-table')
        .select();

      if (error) {
        setFetchError('Could not fetch the creators');
        setCreators(null);
      }
      if (data) {
        setCreators(data);
        setFetchError(null);
      }
    };

    fetchCreators();

  }, []);

  return (
    <div className="page home">
      {fetchError && (<p>{fetchError}</p>)}
      {creators && (
        <div className="creators">
          {/* order-by buttons */}
          <div className="creator-grid">
            {creators.map(creator => (
              <CreatorCard key={creator.id} creator={creator} onDelete={handleDelete} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
