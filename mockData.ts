
import { Fish, Category } from './types';

export const CATEGORIES: Category[] = [
  { id: 'cat1', name: { en: 'Flowerhorn', es: 'Flowerhorn', ar: 'فلاور هورن' }, image: 'https://tropicflow.com/cdn/shop/collections/Untitled_46.png?v=1713339790&width=1500', fishCount: 5 },
  { id: 'cat2', name: { en: 'Arowana', es: 'Arowana', ar: 'أروانا' }, image: 'https://robbreport.com/wp-content/uploads/2019/01/shutterstock_755489131.jpg', fishCount: 4 },
  { id: 'cat3', name: { en: 'Discus', es: 'Discus', ar: 'ديسكاس' }, image: 'https://images3.ratemyfishtank.com/articlephoto/177/Tips-for-Breeding-Discus-Fish-30lfyeb711ycg48ks8c0wgs88-910.jpg', fishCount: 6 },
  { id: 'cat4', name: { en: 'Betta', es: 'Betta', ar: 'بيتا' }, image: 'https://cdn.shopify.com/s/files/1/0323/1226/2794/files/Betta_fish.jpg?v=1740128915', fishCount: 8 },
  { id: 'cat5', name: { en: 'Clownfish', es: 'Pez Payaso', ar: 'سمكة المهرج' }, image: 'https://picsum.photos/seed/clown/400/400', fishCount: 3 },
  { id: 'cat6', name: { en: 'Goldfish', es: 'Pez Dorado', ar: 'سمك ذهبي' }, image: 'https://media.masterfisch.com/140109-thickbox_default/lionhead-goldfish-red-jelly.jpg', fishCount: 5 },
  { id: 'cat7', name: { en: 'Guppy', es: 'Guppy', ar: 'جوبي' }, image: 'https://cdn.britannica.com/02/117202-050-62267C8B/Guppy.jpg', fishCount: 4 },
  { id: 'cat8', name: { en: 'Angelfish', es: 'Pez Ángel', ar: 'سمكة ملائكية' }, image: 'https://www.swelluk.com/media/catalog/product/b/l/blue_angelfish.png?store=default&image-type=image', fishCount: 5 },
];

const generateFish = (id: string, catId: string, nameEn: string, nameEs: string, nameAr: string, price: number): Fish => ({
  id,
  categoryId: catId,
  name: { en: nameEn, es: nameEs, ar: nameAr },
  scientificName: 'Cichlasoma sp.',
  price,
  discountPrice: price * 0.9,
  images: [
    `https://picsum.photos/seed/fish${id}a/800/800`,
    `https://picsum.photos/seed/fish${id}b/800/800`,
    `https://picsum.photos/seed/fish${id}c/800/800`,
  ],
  description: {
    en: 'A high-quality specimen with vibrant colors and excellent health. Perfect for advanced hobbyists looking for a center-piece for their aquarium.',
    es: 'Un ejemplar de alta calidad con colores vibrantes y excelente salud. Perfecto para aficionados avanzados que buscan una pieza central para su acuario.',
    ar: 'عينة عالية الجودة بألوان نابضة بالحياة وصحة ممتازة. مثالي للهواة المتقدمين الذين يبحثون عن قطعة مركزية لحوض الأسماك الخاص بهم.'
  },
  specifications: {
    origin: 'Southeast Asia',
    tankSize: '75 Gallons',
    temperament: 'Aggressive',
    diet: 'Carnivore',
    careLevel: 'Intermediate',
    size: '12 inches'
  },
  stock: 10,
  rating: 4.8,
  reviews: 24,
  featured: Math.random() > 0.5
});

export const FISH_PRODUCTS: Fish[] = [
  // Flowerhorn
  generateFish('f1', 'cat1', 'King Kamfa Flowerhorn', 'Flowerhorn Rey Kamfa', 'فلاور هورن كينج كامفا', 250),
  generateFish('f2', 'cat1', 'Super Red Dragon', 'Dragón Rojo Súper', 'تنين أحمر خارق', 180),
  generateFish('f3', 'cat1', 'Blue Silk Flowerhorn', 'Flowerhorn Seda Azul', 'فلاور هورن الحرير الأزرق', 210),
  generateFish('f4', 'cat1', 'Thai Silk Special', 'Especial Seda Tailandesa', 'حرير تايلاندي مميز', 195),
  generateFish('f5', 'cat1', 'Golden Base Flowerhorn', 'Flowerhorn Base Dorada', 'فلاور هورن قاعدة ذهبية', 300),
  
  // Arowana
  generateFish('f6', 'cat2', 'Golden Crossback Arowana', 'Arowana Dorada Crossback', 'أروانا ذهبية كروس باك', 1200),
  generateFish('f7', 'cat2', 'Super Red Arowana', 'Arowana Súper Roja', 'أروانا حمراء خارقة', 1500),
  generateFish('f8', 'cat2', 'Silver Arowana', 'Arowana Plateada', 'أروانا فضية', 85),
  generateFish('f9', 'cat2', 'Jardini Arowana', 'Arowana Jardini', 'أروانا جارديني', 150),
  
  // Discus
  generateFish('f10', 'cat3', 'Blue Diamond Discus', 'Discus Diamante Azul', 'ديسكاس الماس الأزرق', 75),
  generateFish('f11', 'cat3', 'Pigeon Blood Discus', 'Discus Sangre de Pichón', 'ديسكاس دم الحمام', 80),
  generateFish('f12', 'cat3', 'Marlboro Red Discus', 'Discus Rojo Marlboro', 'ديسكاس أحمر مارلبورو', 90),
  generateFish('f13', 'cat3', 'Checkerboard Pigeon', 'Pigeon Ajedrez', 'بيجون شطرنج', 85),
  generateFish('f14', 'cat3', 'Snow White Discus', 'Discus Blanco Nieve', 'ديسكاس أبيض ناصع', 110),
  generateFish('f15', 'cat3', 'Turquoise Discus', 'Discus Turquesa', 'ديسكاس فيروزي', 70),
  
  // Betta
  generateFish('f16', 'cat4', 'Halfmoon Avatar Betta', 'Betta Avatar Medialuna', 'بيتا هاف مون أفاتار', 45),
  generateFish('f17', 'cat4', 'Koi Galaxy Betta', 'Betta Koi Galaxia', 'بيتا كوي جالاكسي', 35),
  generateFish('f18', 'cat4', 'Crowntail Royal Blue', 'Crowntail Azul Real', 'كراون تيل أزرق ملكي', 25),
  generateFish('f19', 'cat4', 'Full Moon White', 'Luna Llena Blanca', 'فول مون أبيض', 40),
  generateFish('f20', 'cat4', 'Alien Betta Green', 'Betta Alien Verde', 'بيتا فضائي أخضر', 55),
  
  // Clownfish
  generateFish('f21', 'cat5', 'Ocellaris Clownfish', 'Pez Payaso Ocellaris', 'سمكة المهرج أوسيلاريس', 25),
  generateFish('f22', 'cat5', 'Black Storm Clownfish', 'Pez Payaso Tormenta Negra', 'سمكة المهرج العاصفة السوداء', 120),
  generateFish('f23', 'cat5', 'Picasso Clownfish', 'Pez Payaso Picasso', 'سمكة المهرج بيكاسو', 85),
  
  // Goldfish
  generateFish('f24', 'cat6', 'Red White Oranda', 'Oranda Rojo y Blanco', 'أوراندا أحمر وأبيض', 35),
  generateFish('f25', 'cat6', 'Black Moor Goldfish', 'Pez Dorado Moro Negro', 'سمك ذهبي بلاك مور', 15),
  generateFish('f26', 'cat6', 'Calico Ryukin', 'Ryukin Calicó', 'ريوكين كاليكو', 30),
  
  // Guppy
  generateFish('f27', 'cat7', 'Full Gold Guppy', 'Guppy Todo Oro', 'جوبي ذهبي بالكامل', 12),
  generateFish('f28', 'cat7', 'Blue Moscow Guppy', 'Guppy Moscú Azul', 'جوبي موسكو أزرق', 10),
  
  // Angelfish
  generateFish('f29', 'cat8', 'Altum Angelfish', 'Pez Ángel Altum', 'سمكة ملائكية ألتوم', 60),
  generateFish('f30', 'cat8', 'Black Marble Angel', 'Ángel Mármol Negro', 'سمكة ملائكية رخامية سوداء', 25),
  generateFish('f31', 'cat8', 'Koi Angelfish', 'Pez Ángel Koi', 'سمكة ملائكية كوي', 30),
];
