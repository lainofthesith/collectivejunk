# Implement a quicksort


items = [20, 6, 8, 53, 56, 23, 87, 41, 49, 19]


def quickSort(dataset, first, last):
    if first < last:
        # calculate the split point
        pivotIdx = partition(dataset, first, last)

        # now sort the two partitions
        quickSort(dataset, first, pivotIdx-1)
        quickSort(dataset, pivotIdx+1, last)


def partition(datavalues, first, last):
    # choose the first item as the pivot value
    pivotvalue = datavalues[first]
    # establish the upper and lower indexes
    lowerIdx = first + 1
    upperIdx = last

    # start searching for the crossing point
    done = False
    while not done:
        # advance the lower index
        while lowerIdx <= upperIdx and datavalues[lowerIdx] <= pivotvalue:
            lowerIdx += 1

        # advance the upper index
        while datavalues[upperIdx] >= pivotvalue and upperIdx >= lowerIdx:
            upperIdx -= 1

        # if the two indexes cross, we have found the split point
        if upperIdx < lowerIdx:
            done = True
        else:
            #exchange the two values
            temp = datavalues[lowerIdx]
            datavalues[lowerIdx] = datavalues[upperIdx]
            datavalues[upperIdx] = temp


    # when the split point is found, exchange the pivot value
    temp = datavalues[first]
    datavalues[first] = datavalues[upperIdx]
    datavalues[upperIdx] = temp

    # return the split point index
    return upperIdx


# test the merge sort with data
print(items)
quickSort(items, 0, len(items)-1)
print(items)
