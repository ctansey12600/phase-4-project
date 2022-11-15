class User < ApplicationRecord
  has_secure_password

  has_many :reviews
  has_many :drinks, through: :reviews

  has_many :user_ingredients
  has_many :ingredients, through: :user_ingredients

  validates :username, presence: true, uniqueness: true
  validates :first_name, presence: true
  validates :last_name, presence: true
end
