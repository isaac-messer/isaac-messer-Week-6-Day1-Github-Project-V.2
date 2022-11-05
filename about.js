const storeItems = [
    {
        name: 'TV',
        price: 800.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Phone',
        price: 700.00,
        inStock: false,
        details: '5G'
    },
    {
        name: 'Game Console',
        price: 300.00,
        inStock: true,
        details: 'The latest and greatest'
    },
    {
        name: 'Laptop',
        price: 1200.00,
        inStock: true,
        details: '16GB RAM 1TB SSD'
    },
    {
        name: 'Smart Watch',
        price: 200.00,
        inStock: false,
        details: 'Counts your steps'
    },
    {
        name: 'Headphones',
        price: 100.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Keyboard',
        price: 100.00,
        inStock: true,
        details: 'Types for you'
    },
    {
        name: 'HDMI Cord',
        price: 100.00,
        inStock: true,
        details: 'HDMI to USB type C'
    },
    {
        name: 'Monitor',
        price: 300.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Speaker',
        price: 200.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Video Game',
        price: 60.00,
        inStock: true,
        details: 'Enjoy for hours'
    },
];
let i = 0;
  $(storeItems).each(function() {
    
    //console.log(storeItems[i].inStock);
    
    if (storeItems[i].inStock === true) {
      
      $('#contentContainers').append('<div><ui><li>$'+storeItems[i].price+'</li><li>'+storeItems[i].name+'</li><li>'+storeItems[i].details+'</li></ui></div>');
          $('#contentContainers div').addClass('singleContainer');
    }
    
    i+= 1;
    
  });

  $('#clickMe').click(function () {
    console.log('click')
    $('.singleContainer').toggleClass('darkContainers')
    $('body').toggleClass('darkMode')
    $('#button').toggleClass('darkMode')
  })

  