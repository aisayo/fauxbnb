# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Posting.create([
    {title: 'Testing', description: 'testing', price: '100.00', availability: '9/02/2020'},
    {title: 'Testing1', description: 'testing1', price: '100.00', availability: '9/03/2020'},
    {title: 'Testing2', description: 'testing2', price: '100.00', availability: '9/04/2020'}
])