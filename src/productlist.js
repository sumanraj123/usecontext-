import React from "react";
import{
    Link
} from "react-router-dom"
export default function Productlist()
{
    return <>
    <div class="container-fluid">


<h1 class="h3 mb-2 text-gray-800">Tables</h1>
<p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
    For more information about DataTables, please visit the <a target="_blank"
        href="https://datatables.net">official DataTables documentation</a>.</p>
        <Link to="/usercreate">Create Product</Link>

<div class="card shadow mb-4">
    <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
    </div>
    <div class="card-body">
        <div class="table-responsive">
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                    <tr>
                        <th>ProductName</th>
                        <th>Brand</th>
                        <th>processor</th>
                        <th>Battery</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
                        <td>Iphone 12pro max</td>
                        <td>Apple</td>
                        <td>A14 Bionicchip </td>
                        <td>4500mah</td>
                        <td>126000</td>
                        
                        <td>
                            <Link to="/productedit/1">Product Edit</Link>
                            </td>
                    </tr>
                    <tr>
                        <td>Samsung galaxy s21 ultra</td>
                        <td>Samsung</td>
                        <td>Exynos 1000 chip</td>
                        <td>5000mah</td>
                        <td>100000</td>
                        <td>
                            <Link to="/productedit/2">Product Edit</Link>
                            </td>
                    </tr>
                    <tr>
                        <td>Oneplus Note9 Pro</td>
                        <td>Oneplus</td>
                        <td>Snapdragon 888 chip</td>
                        <td>4700mah</td>
                        <td>65000</td>
                        <td>
                            <Link to="/productedit/3">Product Edit</Link>
                            </td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>
</div>

</div>
    </>
}