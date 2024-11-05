// src/app/page.jsx

export async function getServerSideProps() {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
  
  export default function Home() {
    return null; // Redirect ke baad kuch render nahi hoga
  }
  