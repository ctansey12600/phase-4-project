class User < ApplicationRecord
  has_secure_password

  has_many :reviews
  has_many :drinks, through: :reviews

  validates :username, presence: true, uniqueness: true
  validates :first_name, presence: true
  validates :last_name, presence: true
end
