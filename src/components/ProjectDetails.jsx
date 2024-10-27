import React from 'react';

const ProjectDetails = () => {
  return (
    <section id='ProjectDetails' className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-8">Proje Detayları</h2>

      {/* Teknik Özellikler */}
      <div className="mb-12">
        <h3 className="text-3xl font-semibold text-blue-700 mb-6 border-b-4 border-red-500 pb-2">
          Teknik Özellikler
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Ağırlık', content: '15 kg ağırlığıyla hafif ve taşınabilir bir yapıya sahiptir.' },
            { title: 'Maksimum Hız', content: 'Saatte 150 km hızla uçabilme kapasitesine sahiptir.' },
            { title: 'Uçuş Süresi', content: '8 saate kadar havada kalabilen uzun süreli operasyonlar için ideal.' },
            { title: 'Kamera Çözünürlüğü', content: '4K çözünürlük sunan yüksek kaliteli görüntüleme sistemi.' },
            { title: 'Menzil', content: '100 km menzile sahip, geniş alanlarda keşif imkanı sağlar.' },
            { title: 'Yakıt Kapasitesi', content: '10 litre kapasite ile uzun uçuş sürelerine olanak tanır.' },
          ].map(({ title, content }, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg border-l-4 border-red-500 hover:shadow-xl transition-shadow duration-300"
            >
              <h4 className="text-xl font-bold mb-2 text-blue-700">{title}</h4>
              <p>{content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Kullanım Alanları */}
      <div className="mb-12">
        <h3 className="text-3xl font-semibold text-blue-700 mb-6 border-b-4 border-red-500 pb-2">
          Kullanım Alanları
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Askeri', content: 'Gözetim, keşif ve hedef tespiti gibi askeri operasyonlarda kullanılır.' },
            { title: 'Ticari', content: 'Kargo taşımacılığı, haritalama ve altyapı denetimi için idealdir.' },
            { title: 'Sivil', content: 'Doğa gözlemi, afet yönetimi ve arama-kurtarma operasyonlarında kullanılır.' },
          ].map(({ title, content }, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg border-l-4 border-red-500 hover:shadow-xl transition-shadow duration-300"
            >
              <h4 className="text-xl font-bold mb-2 text-blue-700">{title}</h4>
              <p>{content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Kullanım Alanları */}
      <div className="mb-12">
        <h3 className="text-3xl font-semibold text-blue-700 mb-6 border-b-4 border-red-500 pb-2">
        Geliştirme Süreci
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Prototip Oluşturma", content: "İlk aşamada, İHA'nın temel yapısal tasarımı ve özellikleri üzerinde çalışıldı. Malzeme seçimi ve model oluşturma işlemleri yapıldı. Bu süreçte hafif ama dayanıklı malzemelerin seçimi yapılarak ağırlık ve dayanıklılık dengesine dikkat edildi." },
            { title: "İlk Test Uçuşları", content: " Prototipin tamamlanmasının ardından ilk test uçuşları yapıldı. Uçuş dinamikleri, motor gücü, ve kontrol sistemlerinin etkinliği gerçek hava koşullarında test edildi. Ayrıca, İHA'nın stabilitesi, manevra kabiliyeti ve maksimum hız sınırları belirlendi." },
            { title: "Sensör ve Kamera Kalibrasyonu", content: "Yüksek çözünürlüklü kameralar ve sensörlerin doğruluğu sağlandı. Görüntü netliği, renk doğruluğu ve gece-gündüz görüntüleme performansı iyileştirildi." },
            { title: "Gelişmiş Fonksiyonların Entegrasyonu", content: "İHA’ya otomatik rota belirleme, engel algılama ve uzaktan komuta özellikleri eklendi. Bu aşamada kullanılan yazılım modülleri, İHA'nın görev esnasında daha verimli bir şekilde yönlendirilmesi için optimize edildi." },
            { title: "Son Testler ve Performans İyileştirmeleri", content: "İHA, farklı hava koşullarında uçurularak dayanıklılığı test edildi ve performans iyileştirmeleri yapıldı. Uçuş süresi, menzil ve hız gibi temel özellikler optimize edilerek son düzenlemeler yapıldı." },
            { title: "Seri Üretim Hazırlıkları", content: " Geliştirme sürecinin başarıyla tamamlanmasının ardından üretim aşamasına geçildi. Seri üretim için gerekli kalıp ve montaj düzenekleri hazırlandı. Kalite kontrol aşamaları belirlenerek üretim sürecinin standartlara uygun şekilde yürütülmesi sağlandı." },
          ].map(({ title, content }, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg border-l-4 border-red-500 hover:shadow-xl transition-shadow duration-300"
            >
              <h4 className="text-xl font-bold mb-2 text-blue-700">{title}</h4>
              <p>{content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
