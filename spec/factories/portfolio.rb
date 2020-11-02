FactoryBot.define do
  factory :portfolio do
    title { Faker::Lorem.sentence }
    description { Faker::Lorem.paragraph }
    github { 'https://github.com' }
    url { 'https://ja.wikipedia.org' }
    image { 'https://placehold.it/250x150/8ad5f0/08088A?text=Hello+world!' }
    association :user
  end
end
