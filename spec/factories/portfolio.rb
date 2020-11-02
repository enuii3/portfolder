FactoryBot.define do
  factory :portfolio do
    title { Faker::Lorem.sentence }
    description { Faker::Lorem.paragraph }
    github { 'https://github.com' }
    url { 'https://ja.wikipedia.org' }
    association :user
  end
end

