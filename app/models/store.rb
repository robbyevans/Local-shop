class Store < ApplicationRecord
    has_one :admin
    belongs_to :user
    has_many :clerks, through: :admin
    has_many :items, through: :clerks
    has_many :requested_items, through: :clerks
end
