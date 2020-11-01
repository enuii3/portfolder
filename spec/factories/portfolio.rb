FactoryBot.define do
  factory :portfolio do
    title { Faker::Lorem.sentence }
    description { Faker::Lorem.paragraph_by_chars }
    github { 'https://github.com' }
    url { 'https://ja.wikipedia.org' }
    association :user
  end
end