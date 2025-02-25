// import { useState } from "react";

function App() {
//   const [data] = useState(data);

  const data = [
    {
    "id": 1,
    "category": "Wanita Training",
    "image": "",
    "title": "T-Shirt AEROREADY Designed 2 Move Sport 3-Stripes Sport",
    "description": "Pakai tee adidas ini dan kamu akan siap untuk hari yang aktif, dari gym hingga pertandingan sepak bola si kecil dan apa pun dalam jadwalmu. Sensasi ultra-breathable membuatmu tetap nyaman, dan kelim lengkung memberikan perlindungan ekstra di bagian belakang. Produk ini dibuat dengan Primegreen, rangkaian material hasil daur ulang beperforma tinggi. Juga dibuat dengan konten hasil daur ulang sebagai bagian dari ambisi kami untuk mengakhiri pencemaran limbah plastik.",
    "price": "Rp. 450.000"
    },

    {
    "id": 2,
    "category": "Pria Sportwear",
    "image": "",
    "title": "Sepatu VS Jog 2.0",
    "description": "Tampilan klasik tidak akan pernah salah, artinya pilihan tepat untuk memakai Sepatu adidas VS Jog 2.0 ini. Evolusi style sepatu running ternama, sepatu ini dibuat dengan upper berbahan nilon ringan dengan overlay suede dan 3-Stripes ikonis.Produk ini mengandung sedikitnya 20% material daur ulang. Dengan menggunakan kembali material yang telah dibuat, kami membantu mengurangi limbah dan ketergantungan kita pada sumber daya terbatas dan mengurangi jejak karbon dari produk yang kita buat.",
    "price": "Rp. 950.000"
    }

]


//   useEffect(() => {
//     console.log("Tesss")
//     fetch("/data.json",)
//       .then((res) => res.json())
//       .then((data) => console.log("Haaloo:",data))
//       .catch((err) => console.error(err));
//   }, []);

  return (

    <div>
  {data.length > 0 ? (
    data.map((product) => {
      console.log(product); // Cek apakah objeknya ada
      return <p key={product.id}>{product.category}</p>;
    })
  ) : (
    <p>Loading...</p>
  )}
</div>

  );
}

export default App;
