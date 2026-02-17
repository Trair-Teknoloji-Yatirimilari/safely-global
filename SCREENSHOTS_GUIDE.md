# Ekran Görüntülerini Ekleme Rehberi

## Adım 1: Klasör Oluştur

Proje ana dizininde `public/screenshots/` klasörünü oluştur:

```bash
mkdir -p public/screenshots
```

## Adım 2: Ekran Görüntülerini Hazırla

Gönderdiğin ekran görüntülerini şu şekilde yeniden adlandır:

- `screenshot1.png` - İlk ekran (örn: Ana sayfa)
- `screenshot2.png` - İkinci ekran (örn: Dil seçimi)
- `screenshot3.png` - Üçüncü ekran (örn: İlgi alanları)
- `screenshot4.png` - Dördüncü ekran (örn: Sadece aktifken görünürsün)
- `screenshot5.png` - Beşinci ekran (örn: Detay ekranı)

## Adım 3: Dosyaları Kopyala

Yeniden adlandırdığın dosyaları `public/screenshots/` klasörüne kopyala.

### macOS/Linux:
```bash
cp /path/to/your/images/*.png public/screenshots/
```

### Manuel Olarak:
1. Finder/File Explorer'da `public/screenshots/` klasörünü aç
2. Ekran görüntülerini sürükle-bırak

## Adım 4: Dosya Yapısı Kontrolü

Proje yapın şöyle görünmeli:

```
safely-website/
├── public/
│   └── screenshots/
│       ├── screenshot1.png
│       ├── screenshot2.png
│       ├── screenshot3.png
│       ├── screenshot4.png
│       └── screenshot5.png
├── app/
├── components/
└── ...
```

## Adım 5: Test Et

```bash
npm run dev
```

Tarayıcıda http://localhost:3000 aç ve aşağı kaydırarak "Uygulama Ekranları" bölümünü kontrol et.

## Özelleştirme

Daha fazla veya daha az ekran görüntüsü eklemek için `components/Screenshots.tsx` dosyasını düzenle:

```typescript
const screenshots = [
  "screenshot1.png",
  "screenshot2.png", 
  "screenshot3.png",
  // Daha fazla ekle...
];
```

## Optimizasyon İpuçları

1. **Boyut:** Ekran görüntülerini 1000px genişliğe kadar küçült
2. **Format:** PNG veya WebP kullan
3. **Sıkıştırma:** TinyPNG veya ImageOptim ile optimize et
4. **Dosya boyutu:** Her dosya 500KB'den küçük olmalı

## Sorun Giderme

**Resimler görünmüyor mu?**
- Dosya isimlerinin doğru olduğundan emin ol (küçük harf, boşluk yok)
- Dosyaların `public/screenshots/` içinde olduğunu kontrol et
- Tarayıcıyı yenile (Cmd+Shift+R veya Ctrl+Shift+R)
- Development server'ı yeniden başlat

**Resimler bozuk görünüyor mu?**
- Dosyaların bozuk olmadığını kontrol et
- PNG veya JPG formatında olduğundan emin ol
- Dosya izinlerini kontrol et (readable olmalı)
