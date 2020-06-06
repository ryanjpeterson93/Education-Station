class Api::YpostsController < ApplicationController
  before_action :set_ypost, only: [:show, :edit, :destroy, :update]
  
  def index
    render json: Ypost.all
  end

  def create
    ypost = Ypost.new(ypost_params)

    file = params[:file]
    
    if file
      begin
        ext = File.extname(file.tempfile)
        cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true)

        ypost.photo = cloud_image["secure_url"]
        
      rescue => e
        render json: { errors: e }, status: 422
        return
      end
    end
    if ypost.save
      render json: ypost
    else
      render json: { errors: ypost.errors.full_messages }, status: 422
    end
  end

  def update
    @ypost.update(ypost_params)

    file = params[:file]
    
    if file
      begin
        ext = File.extname(file.tempfile)
        cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true)
        @ypost.photo = cloud_image["secure_url"]
      rescue => e
        render json: { errors: e }, status: 422
        return
      end
    end
    if @ypost.save
      render json: @ypost
    else
      render json: { errors: @ypost.errors.full_messages }, status: 422
    end
  end

  def destroy
    @ypost.destroy
    render json: { message: 'ypost deleted.' }
  end

private
  def ypost_params
    params.permit(:title, :body, :photo, :video)
  end

  def set_ypost
    @ypost = yposts.find(params[:id])
  end
end
