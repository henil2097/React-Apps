import { useEffect, useState, Fragment } from "react";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

// our-domain.com/

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React Meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
};

// export const getServerSideProps = async (context) => {
//   // fetch data from API
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   }; // always returns an object
// };

export const getStaticProps = async () => {
  // fetch data from API

  const client = await MongoClient.connect(
    "mongodb+srv://admin:NbVW3L4hufySkD6A@cluster0.fhngv.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollections = db.collection("meetups");
  const meetups = await meetupsCollections.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  }; // always returns an object
};

export default HomePage;

/*
Using getStaticProps() or getServerSideProps() will no longer needed useEffect and useState for fetching and setting data
  //   const [loadedMeetups, setLoadedMeetups] = useState([]);
  //   useEffect(() => {
  //     setLoadedMeetups(DUMMY_MEETUPS);
  //   }, []);


---------------- Some basic info on getStaticProps() and getServerSideProps() -------------------
Reserved method in nextjs to get static content/data before rendering the page
so that the current component page gets executed and rendered with required data

Needed getStaticProps method, so that when the component page is loaded and rendered,
it contains the data which will be used by SEO(Search engine optimization) and able to search throught the page

Also, this method will be called during the build process of production.
That means, it doesn't runs on the client side nor on the server side

{revalidate: <seconds>}, prop unlocks the incremental generation of the static content/data for the component page,
so that if data changes after build, we will get the latest data and not the outdated one which is generated while build

revalidate prop accepts the seconds and it will re-generate the static content after every seconds given if there are incoming requests for it
and replaces the old generated page with new one


---------------- Some basic info on getServerSideProps() -------------------
The difference between getServerSideProps and getStaticProps is that,
getServerSideProps() will get executed on the server and prepare the data
whereas getStaticProps() will get executed at the time of build and prepare the data

Also, in getServerSideProps() doesn't needed revalidate prop anymore to revalidate data every seconds

*/
