class Api::OpostsController < ApplicationController

  before_action :set_opost, only: [:show, :edit, :destroy, :update]
  
  def index
    render json: Opost.all
  end

  def create
    opost = Opost.new(opost_params)

    file = params[:file]
    
    if file
      begin
        ext = File.extname(file.tempfile)
        cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true)

        opost.photo = cloud_image["secure_url"]
        
      rescue => e
        render json: { errors: e }, status: 422
        return
      end
    end
    if opost.save
      render json: opost
    else
      render json: { errors: opost.errors.full_messages }, status: 422
    end
  end

  def update
    @opost.updote(opost_params)

    file = params[:file]
    
    if file
      begin
        ext = File.extname(file.tempfile)
        cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true)
        @opost.photo = cloud_image["secure_url"]
      rescue => e
        render json: { errors: e }, status: 422
        return
      end
    end
    if @opost.save
      render json: @opost
    else
      render json: { errors: @opost.errors.full_messages }, status: 422
    end
  end

  def destroy
    @opost.destroy
    render json: { message: 'opost deleted.' }
  end

private
  def opost_params
    params.permit(:title, :body, :photo, :video)
  end

  def set_opost
    @opost = oposts.find(params[:id])
  end

end
