import React, { Component } from 'react';

class Table extends React.Component {
  render() {
    const items = this.props.items;
    return (
      <div id="Table">
        <table>
          <tbody>
            {items.map(item => {
              return (
                <tr>
                  <th>Gross Salary Per Month</th>
                  <td>{item.ctc/12}</td>
                 </tr>
              );
            })}
          </tbody>
          </table>
          
        <table>
          <tbody>
            <tr>
            <th>Components In salary</th>
            <th>Percentage</th>
            <th>Per Month</th>
            <th>Per Annum</th>
            </tr> 
            <tr>  
            <th>Basic Salary</th>
            <th> 45% </th>
            <th> 
            {items.map(item => {
              return (
                <tr>
                  
                  <td>{item.ctc/12 * 0.45}</td>
                 </tr> );
            })}
            </th>
            <th> 
            {items.map(item => {
              return (
                <tr>
                  
                  <td>{item.ctc/12 * 0.45*12}</td>
                 </tr> );
            })}
            </th>
            </tr>
            <tr>
            <th>HRA (calculated on basic wage) </th>
            <th> 40% </th>
            <th> 
            {items.map(item => {
              return (
                <tr>
                  
                  <td>{item.ctc/12 * 0.4 *0.45}</td>
                 </tr> );
            })}
            </th>
            <th> 
            {items.map(item => {
              return (
                <tr>
                  
                  <td>{item.ctc/12 * 0.4 *0.45 *12}</td>
                 </tr> );
            })}
            </th>
            </tr>
            <tr>
            <th>Conveyance allowances (Fixed) </th>
            <th> </th>
            <th> 0 </th>
            <th> 0 </th>
            </tr>
            <tr>
            <th>Mediclaim Benefit (Fixed) </th>
            <th> </th>
            <th> 1667 </th>
            <th> {1667*12} </th>
            </tr>
            <tr>
            <th>Special allowances (Balance amount) </th>
            <th> </th>
            <th> 
            {items.map(item => {
              return (
                <tr>
                  
                  <td>{item.ctc/12 - item.ctc/12 * 0.45 - item.ctc/12 * 0.45 * 0.4 - 1667}</td>
                 </tr> );
            })} 
            </th> 
            <th> 
            {items.map(item => {
              return (
                <tr>
                  
                  <td>{item.ctc/12 - item.ctc/12 * 0.45 - item.ctc/12 * 0.45 * 0.4 - 1667 * 12}</td>
                 </tr> );
            })} 
            </th> 
            </tr>
            <tr>
            <th>Total Gross Salary</th>
            <th> </th>
            <th> 
            {items.map(item => {
              return (
                <tr>
                  
                  <td>{item.ctc/12}</td>
                 </tr> );
            })}
            </th>
            <th> 
            {items.map(item => {
              return (
                <tr>
                  
                  <td>{item.ctc/12 * 12}</td>
                 </tr> );
            })}
            </th>
            </tr>
            <tr>
            <th>PF contribution by employee (on basic) </th>
            <th> 12% </th>
            <th> 
            {items.map(item => {
              return (
                <tr>
                  
                  <td>{item.ctc/12 * 0.45 * 0.12}</td>
                 </tr> );
            })}
            </th>
            <th> 
            {items.map(item => {
              return (
                <tr>
                  
                  <td>{item.ctc/12 * 0.45 * 0.12 * 12}</td>
                 </tr> );
            })}
            </th>
            </tr>
            <tr>
            <th>ESI contribution by employee (on gross) </th>
            <th> 0.75% </th>
            <th> 0 </th>
            <th> 0 </th>
            </tr>
            <tr>
            <th>Professional Tax (PT) (Different for each state)* </th>
            <th>  </th>
            <th> 200 </th>
            <th> 2500 </th>
            </tr>
             <tr>
            <th>Total deductions (PF+ESI+PT) </th>
            <th> </th>
            <th> 
            {items.map(item => {
              return (
                <tr>
                  
                  <td>{item.ctc/12 * 0.45 * 0.12 +200}</td>
                 </tr> );
            })} 
            </th>
            <th> 
            {items.map(item => {
              return (
                <tr>
                  
                  <td>{item.ctc * 0.45 * 0.12 +200 * 12}</td>
                 </tr> );
            })} 
            </th>
            </tr>
            <tr>
            <th>Net Salary (Gross-Total deductions) </th>
            <th> </th>
            <th> 
            {items.map(item => {
              return (
                <tr>
                  
                  <td>{item.ctc/12 - item.ctc/12 * 0.45 * 0.12 +200} </td>
                 </tr> );
            })} 
            </th>
            <th> 
            {items.map(item => {
              return (
                <tr>
                  
                  <td>{item.ctc - item.ctc * 0.45 * 0.12 +200 * 12}</td>
                 </tr> );
            })} 
            </th>
            </tr>
            </tbody>
        </table>
            <table>
            <tbody>
            <tr>
            <th>CTC Calculation</th>
            </tr>
            </tbody>
        </table>
       
        <table>
         <tbody>
            <tr>
            <th>Employer PF contribution (with admin charges)</th>
            <th> 13% </th>
            <th> 
            {items.map(item => {
              return (
                <tr>
                  
                  <td>{item.ctc/12 * 0.45 * 0.13}</td>
                 </tr> );
            })} 
            </th>
            <th> 
            {items.map(item => {
              return (
                <tr>
                  
                  <td>{item.ctc/12 * 0.45 * 0.13 * 12}</td>
                 </tr> );
            })} 
            </th>
            </tr>
            <tr>
            <th>Employer ESI contribution</th>
            <th> 3.25% </th>
            <th> 0 </th>
            <th> 0 </th>
            </tr>
            <tr>
            <th>Variable Pay (Performance linked Bonus)</th>
            <th> </th>
            <th>  </th>
            <th> 400000 </th>
            </tr>
            <tr>
            <th>CTC= Gross salary + (Employer PF+ ESI)+ Variable Pay</th>
            <th> </th>
            <th> 
            {items.map(item => {
              return (
                <tr>
                  
                  <td>{item.ctc/12 + item.ctc/12 * 0.45 * 0.13}</td>
                 </tr> );
            })} 
            </th>
            <th> 
            {items.map(item => {
              return (
                <tr>
                  
                  <td>{item.ctc/12 + item.ctc/12 * 0.45 * 0.13 * 12}</td>
                 </tr> );
            })} 
            </th>
            </tr>
	   </tbody>
        </table>
        <h5>* PT to be deducted Rs.200 every month and Rs.300 in February. </h5>  
      </div>
    );
  }
}

export default Table;
