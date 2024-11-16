#  Gökpençe - İHA Tanıtım ve Takım Portalı

Bu web uygulaması, insansız hava aracı (İHA) projelerini tanıtmak ve takım üyelerinin, süreçlerin ve projeye dair teknik detayların bir portal üzerinden erişilmesini sağlamak amacıyla geliştirilmiştir. Portal, kullanıcı dostu bir tasarım ile ekip üyeleri, proje detayları, teknik özellikler ve galeri gibi bölümleri içermektedir.

---

## Proje Özeti
#### Teknik Özellikler ve Geliştirme Süreci: Proje detaylarının görsel ve metinsel olarak aktarıldığı bir bölüm.
  
#### Ekip Üyeleri: Takım koçu ve ekip gruplarına (yazılım, mekanik, elektronik vb.) dair bilgiler içeren bir sayfa.

####  Galeri: Projeye ait görsellerin hem masaüstü hem mobil cihazlarda keyifli bir şekilde görüntülenmesini sağlayan bir slider ve grid galeri.
  
#### Modal Yapısı: Tüm kartlarda detayların daha geniş bir şekilde sunulabilmesi için modal bileşeni kullanılmıştır.

---

## Öne Çıkan Özellikler
#### Duyarlı (Responsive) Tasarım:  Proje, mobil ve masaüstü cihazlarla tamamen uyumludur.
#### Dinamik ve Modüler Yapı:
  -- CoachCard: Takım koçu bilgilerini gösterir ve detayı modalda sunar.
  -- StudentCard ve TeamGroup: Ekip üyelerini ve ekip gruplarını kullanıcıya sunar.
  -- Gallery: Projeye ait görselleri grid ya da slider halinde gösterir.
  -- Modal: Detaylı bilgilendirme için kullanılan popup bileşeni.
#### Kolay Özelleştirme: Ekip üyeleri, sosyal medya bağlantıları, teknik özellikler ve diğer içerikler kolayca güncellenebilir.
#### Modern UI Kit: Tailwind CSS kullanılarak tasarlanmıştır.

---

### Kullanılan Teknolojiler
#### React: Bileşen tabanlı kullanıcı arayüzü geliştirme.
#### React-Slick: Galeri slider bileşeni.
#### Tailwind CSS: Stil ve tasarım.
#### FontAwesome: Sosyal medya ikonları ve diğer simgeler.
#### JavaScript (ES6+): Dinamik işlevsellik.

---

### Kurulum ve Çalıştırma

#### Gerekli Araçlar:
- Node.js (LTS sürümü önerilir)
- Paket yöneticisi olarak npm ya da yarn
  
1. **Depoyu Klonla:**
   ```bash
   git clone https://github.com/Osmankaankorkmaz/gokpence-web-site).git

2. **Proje Klasörüne Geç:**
   ```bash
   cd ihaportal

3. **Bağımlılıkları Yükle:**
   ```bash
   npm install

4. **Projeyi Çalıştır:**
   ```bash
   npm start
---

   Uygulama tarayıcınızda şu adreste çalışacaktır: http://localhost:3000

---

### Lisans
Bu proje MIT lisansı altında sunulmaktadır. Daha fazla bilgi için LICENSE dosyasına bakabilirsiniz.
