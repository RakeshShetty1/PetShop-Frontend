export const navigation = {
  categories: [
    {
      id: "animal",
      name: "Animal",
      featured: [
        {
          name: "Dog",
          href: "/",
          imageSrc:
            "https://cdn.pixabay.com/photo/2017/09/07/17/48/chihuahua-2726117_640.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Cat",
          href: "/",
          imageSrc:
            "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=600",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          // id: 'clothing',
          // name: 'Clothing',
          id: "pet",
          name: "Pet",
          items: [
            // { name: 'Tops', id:"top", href: `{women/clothing/tops}` },
            // { name: 'Dresses', id:"women_dress", href: '#' },
            // { name: 'Women Jeans', id: 'women_jeans' },
            // { name: 'Lengha Choli', id: 'lengha_choli' },
            // { name: 'Sweaters', id: 'sweater' },
            // { name: 'T-Shirts', id: 't-shirt' },
            // { name: 'Jackets', id: 'jacket' },
            // { name: 'Gouns', id: 'gouns' },
            // { name: 'Sarees', id: 'saree' },
            // { name: 'Kurtas', id: 'kurtas' },
            { name: "Dog", id: "dog", href: "{animal/pet/dog}" },
            { name: "Cat", id: "cat", href: "{animal/pet/cat}" },
            { name: "Rabbit", id: "rabbit" },
            { name: "Fish", id: "fish" },
          ],
        },
        //     {
        //       id: 'accessories',
        //       name: 'Accessories',
        //       items: [
        //         { name: 'Watches', id: 'watch' },
        //         { name: 'Wallets', id: 'wallet' },
        //         { name: 'Bags', id: 'bag' },
        //         { name: 'Sunglasses', id: 'sunglasse' },
        //         { name: 'Hats', id: 'hat' },
        //         { name: 'Belts', id: 'belt' },
        //       ],
        //     },
        //     {
        //       id: 'brands',
        //       name: 'Brands',
        //       items: [
        //         { name: 'Full Nelson', id: '#' },
        //         { name: 'My Way', id: '#' },
        //         { name: 'Re-Arranged', id: '#' },
        //         { name: 'Counterfeit', id: '#' },
        //         { name: 'Significant Other', id: '#' },
        //       ],
        //     },
        //   ],
        // },
        // {
        //   id: 'men',
        //   name: 'Men',
        //   featured: [
        //     {
        //       name: 'New Arrivals',
        //       id: '#',
        //       imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
        //       imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        //     },
        //     {
        //       name: 'Artwork Tees',
        //       id: '#',
        //       imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
        //       imageAlt:
        //         'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        //     },
        //   ],
        //   sections: [
        //     {
        //       id: 'clothing',
        //       name: 'Clothing',
        //       items: [
        //         { name: 'Mens Kurtas', id: 'mens_kurta' },
        //         { name: 'Shirt', id: 'shirt' },
        //         { name: 'Men Jeans', id: 'men_jeans' },
        //         { name: 'Sweaters', id: '#' },
        //         { name: 'T-Shirts', id: 't-shirt' },
        //         { name: 'Jackets', id: '#' },
        //         { name: 'Activewear', id: '#' },

        //       ],
        //     },
        //     {
        //       id: 'accessories',
        //       name: 'Accessories',
        //       items: [
        //         { name: 'Watches', id: '#' },
        //         { name: 'Wallets', id: '#' },
        //         { name: 'Bags', id: '#' },
        //         { name: 'Sunglasses', id: '#' },
        //         { name: 'Hats', id: '#' },
        //         { name: 'Belts', id: '#' },
        //       ],
        //     },
        //     {
        //       id: 'brands',
        //       name: 'Brands',
        //       items: [
        //         { name: 'Re-Arranged', id: '#' },
        //         { name: 'Counterfeit', id: '#' },
        //         { name: 'Full Nelson', id: '#' },
        //         { name: 'My Way', id: '#' },
        //       ],
        //     },
      ],
    },
  ],
  pages: [
    // { name: 'Company', id: '/' },
    // { name: 'Stores', id: '/' },
  ],
};
