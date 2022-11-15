class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :favorite, :drink_id, :user_id
end
