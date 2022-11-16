puts "Seeding data..."

10.times do
  user =
    User.create(
      username: Faker::Internet.username,
      password: "sup3r-secret",
      password_confirmation: "sup3r-secret",
      first_name: Faker::Name.first_name,
      last_name: Faker::Name.last_name,
    )

  response = RestClient.get "www.thecocktaildb.com/api/json/v1/1/random.php"
  drinks_hash = JSON.parse(response)

  drink_hash = drinks_hash["drinks"][0]

  drink =
    Drink.create(
      name: drink_hash["strDrink"],
      category: drink_hash["strCategory"],
      suggested_glass: drink_hash["strGlass"],
      image_url: drink_hash["strDrinkThumb"],
    )

  review =
    Review.create(
      rating: rand(1..5),
      favorite: Faker::Boolean.boolean,
      drink_id: drink.id,
      user_id: user.id,
    )

  recipe =
    Recipe.create(
      title: "How to make #{drink_hash["strDrink"]}s",
      time_required: rand(1..10),
      drink_id: drink.id,
    )

  collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

  collection.each do |n|
    if drink_hash["strIngredient#{n}"] != nil
      ingredient = Ingredient.create(name: drink_hash["strIngredient#{n}"])
      if drink_hash["strMeasure#{n}"] != nil
        RecipeIngredient.create(
          step_number: n,
          measurement: drink_hash["strMeasure#{n}"],
          ingredient_id: ingredient.id,
          recipe_id: recipe.id,
        )
      end
    end
  end

  RecipeIngredient.all.each do |r|
    random = Faker::Boolean.boolean
    if random
      UserIngredient.create(
        amount_owned: r.measurement,
        user_id: user.id,
        ingredient_id: r.ingredient_id,
      )
    else
      UserIngredient.create(
        amount_owned: "0",
        user_id: user.id,
        ingredient_id: r.ingredient_id,
      )
    end
  end
end

puts "✅ Done seeding!"
