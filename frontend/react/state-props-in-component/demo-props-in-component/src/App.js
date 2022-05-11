import React from 'react';
import HelloWorld from './components/HelloWorld';

const App = () => {
  const name = 'Wahyu Nur Arifin';
  const dataProps = {title: 'Wahyu', data: 'GG Geming'};
  const data = [
    {
      title: 'Wahyu',
      data: 'GG Geming'
    },
    {
      title: 'ilham',
      data: 'hehe'
    },
    {
      title: 'rehan',
      data: 'hihi'
    }
  ];
  return (
    <div>
    {/* <HelloWorld {...dataProps} />
    <HelloWorld title="ilham" data="hehe" />
    <HelloWorld title="yosha" data="h0h0" />
    <HelloWorld title="rehan" data="gg" /> */}

    <h1>List</h1>
    {data.map((item, index) => {
      return <HelloWorld key={index} {...item} />
    }
    )}
    </div>
  );
}

export default App;

// const DetailNews = (props) => {
//   const {image, title, date} = props;
//   return(
//      <div className='eachNews'>
//        <img src={image} />
//        <div className='description'>
//           <div>
//              {title}
//           </div>
//           <div className='text-grey'>
//             {date}
//           </div>
//        </div>
//      </div>
//   )
// }

// function App() {
//   const data = [
//     {
//       image : "https://picsum.photos/id/237/150/",
//       title : "  Gunung Anak Krakatau Naik Status dari Waspada ke Siaga",
//       date  : "June, 29 2019",
//     },
//     {
//       image : "https://picsum.photos/id/137/150/",
//       title : "Sederet Fakta Pelonggaran Covid Besar-besaran di Singapura",
//       date : "April, 19 2019",
//     },
//     {
//       image : "https://picsum.photos/id/500/150",
//       title : "Launching Rumah Tipe Baru Grand Wisata Bekasi, Ada Promo DP Rp0",
//       date : "March, 1 2019",
//     },
//     {
//       image : "https://picsum.photos/id/999/150",
//       title : "Puluhan Pilot Australia Menerbangkan Pesawat Drone Bersenjata Inggris di Timur Tengah",
//       date : "April, 19 2029",
//     }
//   ];


//   return (
//     <div className="state-props-1">
//       <h3>Recent Posts</h3>
//       <div className='news-container'>
//         {
//           data.map((element, index) => (
//             <DetailNews image={element.image} title={element.title} date={element.date} key={index} />
//           ))
//         }
//       </div>
//     </div>
//   );
// }

// export default App;
