class DrinkSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :image_url, :suggested_glass
end
