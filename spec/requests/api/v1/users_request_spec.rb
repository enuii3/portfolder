require 'rails_helper'

RSpec.describe 'Api::V1::Users', type: :request do
  let(:user) { FactoryBot.create(:user) }
  let(:json) { JSON.parse(response.body) }

  describe '#show' do
    context 'when get /api/v1/users/:id' do
      before { get "/api/v1/users/#{user.id}" }

      it 'expect keys that id name selfIntroduction' do
        expect(json.keys).to eq(%w[id name selfIntroduction])
      end

      it 'returned 200 http response status' do
        expect(response.status).to eq(200)
      end
    end

    context 'when get /api/v1/users/undefined' do
      before { get '/api/v1/users/undefined' }

      it 'not found artilce expected error response' do
        expect(response.status).to eq(404)
      end

      it "include message 'お探しものが見つかりません'" do
        expect(json).to include('message' => 'お探しものが見つかりません')
      end
    end

    context 'when raise expection' do
      before do
        allow(User).to receive(:find).and_raise
        get "/api/v1/users/#{user.id}"
      end

      it 'returned 500 http response status' do
        expect(response.status).to eq(500)
      end

      it "include message 'エラーが発生しました。システム管理者にお問い合わせください。'" do
        expect(json).to include('message' => 'エラーが発生しました。システム管理者にお問い合わせください。')
      end
    end
  end
end
