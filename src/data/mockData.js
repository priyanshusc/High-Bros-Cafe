export const featuredDishes = [
    {
        id: 1,
        name: 'Classic Avocado Toast',
        description: 'Smashed avocado on sourdough with cherry tomatoes and poached egg.',
        price: '$12.99',
        image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=800&auto=format&fit=crop&q=60'
    },
    {
        id: 2,
        name: 'Signature Caramel Macchiato',
        description: 'Freshly brewed espresso with steamed milk and vanilla, topped with caramel.',
        price: '$5.50',
        image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=800&auto=format&fit=crop&q=60'
    },
    {
        id: 3,
        name: 'Berry Açaí Bowl',
        description: 'Organic açaí topped with fresh berries, homemade granola, and honey.',
        price: '$14.00',
        image: 'https://images.unsplash.com/photo-1590165482129-1b8b27698780?w=800&auto=format&fit=crop&q=60'
    },
    {
        id: 4,
        name: 'Truffle Mushroom Pasta',
        description: 'Creamy pasta loaded with wild mushrooms, truffle oil, and parmesan.',
        price: '$18.50',
        image: 'https://images.unsplash.com/photo-1626844131082-256783844137?w=800&auto=format&fit=crop&q=60'
    }
];

export const menuCategories = [
    {
        category: 'Coffee',
        items: [
            { name: 'Espresso', description: 'Double shot of our signature blend', price: '$3.50' },
            { name: 'Cappuccino', description: 'Espresso with steamed milk and thick foam', price: '$4.50' },
            { name: 'Latte', description: 'Espresso with velvety steamed milk', price: '$4.75' },
            { name: 'Mocha', description: 'Espresso, chocolate, steamed milk & whipped cream', price: '$5.50' },
            { name: 'Cold Brew', description: '12-hour steeped iced coffee', price: '$4.25' }
        ]
    },
    {
        category: 'Snacks',
        items: [
            { name: 'Croissant', description: 'Butter or chocolate flaky pastry', price: '$3.95' },
            { name: 'Blueberry Muffin', description: 'Freshly baked daily', price: '$3.50' },
            { name: 'Caprese Sandwich', description: 'Mozzarella, tomato, basil on ciabatta', price: '$8.50' },
            { name: 'Cheese Board', description: 'Assorted cheeses, crackers, and fruit', price: '$15.00' }
        ]
    },
    {
        category: 'Main Course',
        items: [
            { name: 'Grilled Chicken Salad', description: 'Mixed greens, cherry tomatoes, balsamic vinaigrette', price: '$14.95' },
            { name: 'Margherita Pizza', description: 'Wood-fired crust, fresh tomato sauce, mozzarella', price: '$16.00' },
            { name: 'Veggie Wrap', description: 'Hummus, roasted Mediterranean vegetables, feta', price: '$11.50' },
            { name: 'Salmon Bowl', description: 'Quinoa, roasted salmon, avocado, edamame', price: '$19.50' }
        ]
    },
    {
        category: 'Desserts',
        items: [
            { name: 'Tiramisu', description: 'Coffee-flavored Italian dessert', price: '$7.50' },
            { name: 'Cheesecake', description: 'Classic NY style with berry compote', price: '$6.95' },
            { name: 'Chocolate Lava Cake', description: 'Warm center, served with vanilla ice cream', price: '$8.50' }
        ]
    }
];

export const galleryImages = [
    'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop&q=60',
    'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&auto=format&fit=crop&q=60',
    'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&auto=format&fit=crop&q=60',
    'https://images.unsplash.com/photo-1481833761820-0509d3217039?w=800&auto=format&fit=crop&q=60',
    'https://images.unsplash.com/photo-1495474472207-464ba65b0c9f?w=800&auto=format&fit=crop&q=60',
    'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&auto=format&fit=crop&q=60'
];

export const reviews = [
    {
        id: 1,
        name: 'Sarah Johnson',
        avatar: 'https://i.pravatar.cc/150?img=1',
        rating: 5,
        text: 'Best coffee in town and amazing ambience. The avocado toast is a must-try!'
    },
    {
        id: 2,
        name: 'Michael Chen',
        avatar: 'https://i.pravatar.cc/150?img=11',
        rating: 5,
        text: 'Perfect place to relax with friends. The staff is incredibly friendly and the pastries are always fresh.'
    },
    {
        id: 3,
        name: 'Emily Davis',
        avatar: 'https://i.pravatar.cc/150?img=5',
        rating: 4,
        text: 'Delicious food and great service. Love working from here during the weekdays.'
    }
];
