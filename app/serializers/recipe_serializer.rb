class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :time_required, :drink_id
end
