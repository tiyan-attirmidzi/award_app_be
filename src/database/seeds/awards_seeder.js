/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("awards").del();
  await knex("awards").insert([
    {
      id: 1,
      name: "Gift Card IDR 1.000.000",
      exchange_points: 500000,
      type: "Vouchers",
      image: "https://i.postimg.cc/MKNgYVCh/42779-1.png",
    },
    {
      id: 2,
      name: "Gift Card IDR 500.000",
      exchange_points: 250000,
      type: "Vouchers",
      image: "https://i.postimg.cc/d0Qy5HT1/42779-3.png",
    },
    {
      id: 3,
      name: "Gift Card IDR 250.000",
      exchange_points: 175000,
      type: "Vouchers",
      image: "https://i.postimg.cc/vmDm1pVW/42779-2.png",
    },
    {
      id: 4,
      name: "Gift Card IDR 100.000",
      exchange_points: 50000,
      type: "Vouchers",
      image: "https://i.postimg.cc/nhgyk5WK/42779-4.png",
    },
    {
      id: 5,
      name: "Women's Glasses",
      exchange_points: 100000,
      type: "Products",
      image: "https://i.postimg.cc/9XLkm0hg/8021930-1.png",
    },
    {
      id: 6,
      name: "Hoodie Old School",
      exchange_points: 135000,
      type: "Products",
      image: "https://i.postimg.cc/K8DsRD3b/8021930-2.png",
    },
    {
      id: 7,
      name: "Men's Shirt",
      exchange_points: 110000,
      type: "Products",
      image: "https://i.postimg.cc/132Ytk6N/8021930-3.png",
    },
    {
      id: 8,
      name: "Women's Outerwear",
      exchange_points: 180000,
      type: "Products",
      image:
        "https://i.postimg.cc/SKWFpS5K/fashion-portrait-young-elegant-woman.jpg",
    },
    {
      id: 9,
      name: "Gift Card IDR 750.000",
      exchange_points: 330000,
      type: "Vouchers",
      image: "https://i.postimg.cc/W4QG0jb0/4534271.png",
    },
  ]);
};
