require 'rails_helper'

RSpec.describe 'Api::V1::Portfolios::Post', type: :request do
  let(:json) { JSON.parse(response.body) }
  let(:user) { FactoryBot.create(:user) }
  let(:portfolios_count) { Portfolio.count }
  let(:params) do
    {
      title: 'test-title',
      description: 'test-description',
      github: 'test-github',
      url: 'test-url',
      image: 'test-image',
      user_id: user.id
    }
  end

  describe '#create' do
    context 'when post request with title description github url image user_id' do
      before do
        portfolios_count
        post '/api/v1/portfolios/', params: { portfolio: params }
      end

      it 'expect Portfolio count plus 1' do
        expect(Portfolio.count).to eq(portfolios_count + 1)
      end

      it 'is correct parameters' do
        aggregate_failures 'titie, description, github, url, image and user_id' do
          expect(json['title']).to eq('test-title')
          expect(json['description']).to eq('test-description')
          expect(json['github']).to eq('test-github')
          expect(json['url']).to eq('test-url')
          expect(json['image']).to eq('test-image')
          expect(json['user_id']).to eq(user.id)
        end
      end

      it 'expect response status 200' do
        expect(response.status).to eq(200)
      end
    end

    context 'when post request without title' do
      before do
        params[:title] = ''
        post '/api/v1/portfolios/', params: { portfolio: params }
      end

      it 'expect response status 422' do
        expect(response.status).to eq(422)
      end

      it 'expect response message ポートフォリオのタイトルを入力してください' do
        expect(json['title']).to include('ポートフォリオのタイトルを入力してください')
      end
    end

    context 'when post request without description' do
      before do
        params[:description] = ''
        post '/api/v1/portfolios/', params: { portfolio: params }
      end

      it 'expect response status 422' do
        expect(response.status).to eq(422)
      end

      it 'expect response message ポートフォリオの説明を入力してください' do
        expect(json['description']).to include('ポートフォリオの説明を入力してください')
      end
    end

    context 'when post request without github' do
      before do
        params[:github] = ''
        post '/api/v1/portfolios/', params: { portfolio: params }
      end

      it 'expect response status 422' do
        expect(response.status).to eq(422)
      end

      it 'expect response message GithubのURLを入力してください' do
        expect(json['github']).to include('GithubのURLを入力してください')
      end
    end

    context 'when post request without url' do
      before do
        params[:url] = ''
        post '/api/v1/portfolios/', params: { portfolio: params }
      end

      it 'expect response status 422' do
        expect(response.status).to eq(422)
      end

      it 'expect response message ポートフォリオのURLを入力してください' do
        expect(json['url']).to include('ポートフォリオのURLを入力してください')
      end
    end

    context 'when post request without image' do
      before do
        params[:image] = ''
        post '/api/v1/portfolios/', params: { portfolio: params }
      end

      it 'expect response status 422' do
        expect(response.status).to eq(422)
      end

      it 'expect response message ポートフォリオのスクリーンショットを入力してください' do
        expect(json['image']).to include('ポートフォリオのスクリーンショットを入力してください')
      end
    end

    context 'when post request with no propaty' do
      before do
        post '/api/v1/portfolios/', params: {}
      end

      it 'expect response status 400 ' do
        expect(response.status).to eq(400)
      end

      it 'expect response messages エラーが発生しました。システム管理者にお問い合わせください。' do
        expect(json).to include('message' => 'エラーが発生しました。システム管理者にお問い合わせください。')
      end
    end

    context 'when raise exception' do
      before do
        allow(Portfolio).to receive(:new).and_raise
        post '/api/v1/portfolios/', params: { portfolio: params }
      end

      it 'expect response status 500' do
        expect(response.status).to eq(500)
      end

      it 'expect response message エラーが発生しました。システム管理者にお問い合わせください。' do
        expect(json).to include('message' => 'エラーが発生しました。システム管理者にお問い合わせください。')
      end
    end
  end
end
