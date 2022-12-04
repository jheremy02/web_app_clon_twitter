import { useParams } from 'react-router-dom';
import Layout from '../../components/layout/Layout.js';

const TweetPage = (props) => {

  const params=useParams()
   console.log(params)
  return (
    <Layout title="Tweet detail" >
      <div>TweetPage {params.idtweet}</div>
    </Layout>
  );
};

export default TweetPage;