<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ItemController extends Controller
{
    public function index()
    {
        return Item::orderBy('created_at', 'DESC')->get();
    }

    public function store(Request $request)
    {
        $newItem = new Item;
        $newItem->name = $request->item["name"];
        $newItem->save();

        return $newItem;
    }

    public function update(Request $request, $id)
    {
        $exisitingItem = Item::find($id);
        if ($exisitingItem) {
            $exisitingItem->completed = $request->item['completed'] ? true : false;
            $exisitingItem->completed_at = $request->item['completed'] ? Carbon::now() : null;
            $exisitingItem->save();
            return $exisitingItem;
        }
        return "item not found";
    }


    public function destroy($id)
    {
        $exisitingItem = Item::find($id);

        if ($exisitingItem) {
            $exisitingItem->delete();
            return "Item successfully deleted";
        }

        return "item not found";
    }
}
