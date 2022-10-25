class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :email, :password_digest, :role
end
