const HeroBrand = () => {
  return (
    <div className="max-w-[660px] flex flex-col gap-[25px]">
      <h1 className="fs-1 font-semibold">Karadutlu Dondurma</h1>

      <p className="text-white/75 font-medium fs-5">
        ✨ Karadutlu Dondurma Yoğun aroması ve ferahlatıcı tadıyla yazın
        vazgeçilmezi! Her kaşıkta karadutun doğal lezzeti, kremamsı dokusuyla
        birleşiyor. 🥶 Serinletir, 😋 tatlandırır, 💜 mutluluk verir!
      </p>

      <div className="flex gap-[40px]">
        <button className="hero-btn">Sipariş Et</button>
        <button className="hero-btn bg-white/15 border-0">Rezarvasyon</button>
      </div>
    </div>
  );
};

export default HeroBrand;
