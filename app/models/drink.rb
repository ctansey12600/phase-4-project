class Drink < ApplicationRecord
  has_many :reviews
  has_many :users, through: :reviews

  has_one :recipe
end
