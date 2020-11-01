FactoryBot.define do
  factory :user do
    name { Faker::Name.name }
    sequence(:email) { |n| "sample#{n}@portfolder.com" }
    encrypted_password { 'hogehoge' }
  end
end

