import axios from 'axios'

const Home = (props) => {

  return(
    <>
      <h1>Hello {props.name}</h1>
      <span>Nothing to see here, {props.value}</span>
      <ul>
        {props.theRequest.map(item=>(
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

    </>
  )
}

export async function getStaticProps(){
  const request = await axios.get('https://jsonplaceholder.typicode.com/users');

  
  // if(request.data.length > 0){
  //   return{
  //     redirect:{
  //       destination:'/someplace_else'
  //     }
  //     ///notFound:true
  //   }
  // }
  
  return{
    props:{
      name:'Francis',
      value:'Just a girl standing in front of a boy...',
      theRequest:request.data
    }
  }
}


export default Home;