<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\ArticleResource;
use App\Models\Article;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ArticleResource::collection(Article::paginate());
    }
    
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return new ArticleResource(Article::find($id));
    }
}
