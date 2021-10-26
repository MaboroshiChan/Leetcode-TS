function twoSum(nums, target) {
    var dict = {};
    for (var i = 0; i < nums.length; ++i) {
        var diff = target - nums[i];
        if (diff in dict) {
            return [i, dict[diff]];
        }
        else {
            dict[nums[i]] = i;
        }
    }
    return [];
}
;
console.log(twoSum([3, 2, 4], 6));
var x = ["abc", "def"].join(", ");
console.log(x);
function merge(nums1, m, nums2, n) {
    var l1 = m - 1;
    var l2 = n - 1;
    var l = m + n - 1;
    while (l >= 0) {
        if (l1 < 0) {
            while (l2 >= 0) {
                nums1[l] = nums2[l2];
                l2--;
                l--;
            }
        }
        else {
            if (nums1[l1] >= nums2[l2]) {
                console.log("nums1  = " + nums1[l] + " l = " + l);
                nums1[l] = nums1[l1];
                l--;
                l1--;
            }
            else {
                console.log("nums1  = " + nums1[l] + " l = " + l);
                nums1[l] = nums2[l2];
                l--;
                l2--;
            }
        }
    }
}
;
var nums1 = [1, 2, 3, 0, 0, 0];
merge(nums1, 3, [2, 5, 6], 3);
console.log(nums1);
