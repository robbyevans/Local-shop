class StoreSerializer < ActiveModel::Serializer
  attributes :id, :store_name, :location, :description, :user_id
  has_one :admin
  has_many :clerks, through: :admin
  has_many :items, through: :clerks
  has_many :requested_items, through: :clerks
<<<<<<< HEAD
  belongs_to :user
=======


>>>>>>> 99d609785e5f0adc53336ab1a7d7fdd86b377b7a
end
