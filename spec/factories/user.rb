FactoryBot.define do
  factory :user do
    name { Faker::Name.name }
    sequence(:email) { |n| "sample#{n}@portfolder.com" }
    encrypted_password { 'hogehoge' }
    self_introduction { Faker::Lorem.paragraph_by_chars }
  end
end
